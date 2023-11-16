import * as yup from "yup";

export const createVillaSchema = (featuredRef, caroRef, gallRef) => {

  const validateFileSize = (files) => {
    let valid = true;
    if (files) {
      const fileArr = Array.from(files);
      fileArr.forEach((file) => {
        const size = file.size / 1024 / 1024;
        if (size > 10) {
          valid = false;
        }
      });
    }
    return valid;
  };

  const validateFileType = (files) =>{

    let valid = true;
    if (files) {
      const fileArr = Array.from(files);
      fileArr.forEach((file) => {
        
        const type = file.type.split("/")[1];
        const validTypes = ["jpeg", "png", "jpg"];
        if (!validTypes.includes(type)) {
          valid = false;
        }
      });
    }
    return valid;
  }


  return yup.object().shape({
    title: yup.string().min(2).required("Title is required"),
    price: yup.number().min(2).required("Price is required"),
    description: yup.string().required("Description is required"),
    beds: yup.number().min(1).required("Number of beds is required"),
    baths: yup.number().min(1).required("Number of baths is required"),
    size: yup.number().min(1).required("Size is required"),
    featured: yup.mixed()
    .test("is-file-too-big", "File exceeds 10MB", () => {
      const files = featuredRef?.current?.files;
      return validateFileSize(files);
    })
    .test(
      "is-file-of-correct-type",
      "File is not of supported type",
      () => {
        const files = featuredRef?.current?.files;
        return validateFileType(files);
      }
    ),
    carousel: yup.mixed()
    .test("is-file-too-big", "File exceeds 10MB", () => {
      const files = caroRef?.current?.files;
      return validateFileSize(files);
    })
    .test(
      "is-file-of-correct-type",
      "File is not of supported type",
      () => {
        const files = caroRef?.current?.files;
        return validateFileType(files);
      }
    ),
    gallery: yup.mixed()
    .test("is-file-too-big", "File exceeds 10MB", () => {
      const files = gallRef?.current?.files;
      return validateFileSize(files);
    })
    .test(
      "is-file-of-correct-type",
      "File is not of supported type",
      () => {
        const files = gallRef?.current?.files;
        return validateFileType(files);
      }
    ),
  });
};