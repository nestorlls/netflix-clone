import FieldWrapper from './ui-Field';

const Flied = ({
  type = 'text',
  label,
  id,
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <FieldWrapper>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className="input"
        type={type}
        id={id || name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </FieldWrapper>
  );
};

export default Flied;
