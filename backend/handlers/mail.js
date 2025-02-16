const { transporter } = require("../pkg/mailer/mailer");
const fs = require("fs");

const contactMail = async (req, res) => {
  const { fullName, email, phone, message } = req.body;
  const file = req.file;
  try {
    await transporter.sendMail({
      from: `${fullName} <${email}>`,
      to: "kontakt@zdravstveno.mk",
      subject: `Нова контакт порака од ${fullName}`,
      text: message,
      html: `<p>Контакт телефон: ${phone}</p><br/><p>${message}</p>`,
      attachments: file
        ? [
            {
              filename: file.originalname,
              path: file.path,
            },
          ]
        : [],
    });
    res.status(200).send({
      message: "Вашата порака е успешно пратена. Ќе ве контактираме наскоро",
    });
    if (file) {
      setTimeout(() => fs.unlinkSync(file.path), 10000);
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ error: "Пораката не е пратена. Обидете се повторно" });
  }
};

module.exports = { contactMail };
