import { Request, Response } from "express";
import { HttpStatus, setResponse } from "../../utils/vars";

const create_account = async (req: Request, res: Response) => {
  try {
    setResponse(res, HttpStatus.SUCCESS.message, HttpStatus.SUCCESS.code);
  } catch (error) {
    setResponse(
      res,
      HttpStatus.INTERNAL_SERVER_ERROR.message,
      HttpStatus.INTERNAL_SERVER_ERROR.code,
      null,
      error
    );
  }
};
const load_type = async (req: Request, res: Response) => {
  try {
    setResponse(res, HttpStatus.SUCCESS.message, HttpStatus.SUCCESS.code);
  } catch (error) {
    setResponse(
      res,
      HttpStatus.INTERNAL_SERVER_ERROR.message,
      HttpStatus.INTERNAL_SERVER_ERROR.code,
      null,
      error
    );
  }
};
export default { create_account, load_type };
