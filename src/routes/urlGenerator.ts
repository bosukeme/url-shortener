import { Router } from 'express';
import { home, shortenUrl, shortCode } from '../controllers/urlGenerator';
import { validate } from '../middlewares/validate';
import { shortenUrlSchema, shortCodeSchema } from '../validators/urlGeneratorValidator';

const router = Router();

router.get('/', home);
router.post('/shorten', validate(shortenUrlSchema, 'body'), shortenUrl);
router.get('/:shortCode', validate(shortCodeSchema, 'params'), shortCode);

export default router;
