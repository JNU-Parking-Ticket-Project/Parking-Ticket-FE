export const onInputPhoneNumber = (e: React.FormEvent<HTMLInputElement>) => {
  const input = e.currentTarget;
  const { value } = input;

  if (value.length > 13) {
    input.value = value.slice(0, 13);
    return;
  }

  input.value = value
    .replace(/[^0-9-]/g, '')
    .replace(/([0-9]{3})([0-9]{4})/, '$1-$2-');
};
