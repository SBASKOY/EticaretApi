
import { Request, Response} from 'express';

const validate = (schema:any) => (req:Request, res:Response, next:Function) => {
    const { value, error } = schema.validate(req.body);
    if (error) {
        const errorMessage = error.details?.map((detail:any) => detail.message).join(", ");
        res.status(400).json({ error: errorMessage });
        return;
    }
    Object.assign(req, value);
    return next();
}
export default validate;