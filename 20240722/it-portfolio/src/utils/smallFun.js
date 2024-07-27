export const inputChange = (e, form, setForm) => {
  const { name, value } = e.target;
  setForm({ ...form, [name]: value });
};

export const checkTypeArr = (data) => {
  return data && Array.isArray(data) && data.length > 0;
};
