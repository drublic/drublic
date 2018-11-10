import mailjet from "../node-mailjet";
import { Request, Response, Router } from "express";
import { EMAIL, RECPIENT } from "../constants";

const getPostParams = (body: any) => ({
  name: body["form-name"],
  email: body["form-email"],
  message: body["form-message"],
  website: body["form-website"],
});

export default () => {
  const apiRoutes: Router = Router();

  const {
    MJ_APIKEY_PUBLIC,
    MJ_APIKEY_PRIVATE,
  } = process.env;

  apiRoutes.post(
    "/api/contact",
    async (req: Request, res: Response): Promise<void> => {
      const data = getPostParams(req.body);

      const mailjetClient = (mailjet as any)
        .connect(MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE);
      const request = mailjetClient
        .post("send", { version: "v3.1" })
        .request({
          Messages: [{
            From: {
              Email: data.email,
              Name: data.name,
            },
            To: [{
              Email: EMAIL,
              Name: RECPIENT,
            }],
            Subject: `[drublic.de] Anfrage von ${data.name}`,
            TextPart: `
Name: ${data.name}
Email-Address: ${data.name}
Message: ${data.message}${data.website ? `\n\nWebsite: ${data.website}` : ""}
            `,
          }],
        });

      const response = await new Promise((resolve, reject) => {
        request
          .then((result: any) => resolve({ success: true }))
          .catch((err: any) => reject({ success: false }));
      });

      return res.json(response).end();
    },
  );

  return apiRoutes;
};
