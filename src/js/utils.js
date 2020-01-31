import Sendsay from "sendsay-api";

export const fileToBase64 = file =>
  new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
  });

export const sendsay = new Sendsay({
  auth: {
    login: "d611606@urhen.com",
    password: "quu4Taqui"
  }
});
