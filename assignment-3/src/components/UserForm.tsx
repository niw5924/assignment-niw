import React, { useState } from 'react';

interface UserFormProps {
  index: number;
  name: string;
  password: string;
  onChange: (index: number, field: 'name' | 'password', value: string) => void;
  onRemove: (index: number) => void;
  nameError?: string;
  passwordError?: string;
}

const UserForm: React.FC<UserFormProps> = ({
  index,
  name,
  password,
  onChange,
  onRemove,
  nameError,
  passwordError,
}) => {
  const [nameTouched, setNameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  return (
    <div
      style={{
        border: '1.5px solid #000',
        borderRadius: '3px',
        padding: '1rem',
        marginBottom: '1rem',
        width: '50%',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h4 style={{ margin: 0, fontWeight: 'bold', fontSize: '20px' }}>User - {index}</h4>
        <button
          onClick={() => onRemove(index)}
          style={{
            border: '3px solid #000',
            background: '#fff',
            cursor: 'pointer',
            borderRadius: '3px'
          }}
        >
          ✖
        </button>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '16px' }}>Name</label>
        <input
          value={name}
          onChange={(e) => onChange(index, 'name', e.target.value)}
          onFocus={() => setNameTouched(true)}
          style={{
            width: '100%',
            padding: '0.5rem',
            border: nameTouched && nameError ? '2px solid red' : '1.5px solid grey',
            borderRadius: '3px',
            backgroundColor: nameTouched && nameError ? '#ffe5e5' : '#fff',
            color: '#000',
            fontSize: '1rem',
            boxSizing: 'border-box',
            outline: 'none',
          }}
        />
        {nameTouched && nameError && (
          <div style={{ color: 'red', marginTop: '0.3rem', fontSize: '0.9rem' }}>{nameError}</div>
        )}
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '16px' }}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => onChange(index, 'password', e.target.value)}
          onFocus={() => setPasswordTouched(true)}
          style={{
            width: '100%',
            padding: '0.5rem',
            border: passwordTouched && passwordError ? '2px solid red' : '1.5px solid grey',
            borderRadius: '3px',
            backgroundColor: passwordTouched && passwordError ? '#ffe5e5' : '#fff',
            color: '#000',
            fontSize: '1rem',
            boxSizing: 'border-box',
            outline: 'none',
          }}
        />
        {passwordTouched && passwordError && (
          <div style={{ color: 'red', marginTop: '0.3rem', fontSize: '0.9rem' }}>{passwordError}</div>
        )}
      </div>
    </div>
  );
};

export default UserForm;
