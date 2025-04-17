import { Request, Response, NextFunction } from 'express';

import { isValidUrl, generateShortCode } from '../services/urlGenerator';
import config from '../config/config';
import Url from '../models/urlGenerators';

const BASE_URL = config.base_url;

export const home = async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: 'Welcome to the URL Generator Service' });
};

export const shortenUrl = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { longUrl } = req.body;

    if (!longUrl || !isValidUrl(longUrl)) {
      res.status(400).json({ error: 'Invalid URL format provided.' });
      return;
    }

    let urlDoc = await Url.findOne({ longUrl });

    if (urlDoc) {
      res.status(200).json({
        shortUrl: `${BASE_URL}/${urlDoc.shortCode}`,
        longUrl: urlDoc.longUrl,
      });
      return;
    }

    let shortCode = generateShortCode();
    while (await Url.exists({ shortCode })) {
      shortCode = generateShortCode();
    }

    urlDoc = await Url.create({ shortCode, longUrl, createdAt: new Date() });

    res.status(201).json({
      shortUrl: `${BASE_URL}/${urlDoc.shortCode}`,
      longUrl: urlDoc.longUrl,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const shortCode = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { shortCode } = req.params;

    const record = await Url.findOne({ shortCode });
    if (!record) {
      res.status(404).json({ error: 'Short URL not found.' });
      return;
    }
    res.redirect(302, record.longUrl);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
