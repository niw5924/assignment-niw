import { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import { countBy } from 'lodash';

interface User {
  name: string;
  password: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([{ name: '', password: '' }]);
  const [errors, setErrors] = useState<{ name?: string; password?: string }[]>([]);
  const [, setConfirmedUsers] = useState<User[]>([]);

  useEffect(() => {
    const nameCounts = countBy(users, 'name');
    const newErrors = users.map((user) => {
      const nameError =
        user.name.length < 3
          ? '이름은 3글자 이상이어야 합니다.'
          : nameCounts[user.name] > 1
          ? '이름이 중복되었습니다.'
          : undefined;

      const passwordError =
        user.password.length < 6
          ? '비밀번호는 6글자 이상이어야 합니다.'
          : undefined;

      return { name: nameError, password: passwordError };
    });

    setErrors(newErrors);
  }, [users]);

  const handleChange = (index: number, field: 'name' | 'password', value: string) => {
    const newUsers = [...users];
    newUsers[index][field] = value;
    setUsers(newUsers);
  };

  const handleAddUser = () => {
    setUsers([...users, { name: '', password: '' }]);
  };

  const handleRemoveUser = (index: number) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  const handleConfirm = () => {
    const validUsers = users.filter((_, i) => !errors[i]?.name && !errors[i]?.password);
    setConfirmedUsers(validUsers);
  };

  const isConfirmDisabled = users.some((_, i) => errors[i]?.name || errors[i]?.password);

  return (
    <div
      style={{
        padding: '2rem',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {users.map((user, index) => (
        <UserForm
          key={index}
          index={index}
          name={user.name}
          password={user.password}
          onChange={handleChange}
          onRemove={handleRemoveUser}
          nameError={errors[index]?.name}
          passwordError={errors[index]?.password}
        />
      ))}

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button
          onClick={handleAddUser}
          style={{
            padding: '0.5rem 1rem',
            border: '2px solid #000',
            borderRadius: '3px',
            background: '#fff',
            color: '#000',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600',
          }}
        >
          Add User
        </button>
        <button
          onClick={handleConfirm}
          style={{
            padding: '0.5rem 1rem',
            border: '2px solid #000',
            borderRadius: '3px',
            background: '#fff',
            color: '#000',
            cursor: isConfirmDisabled ? 'default' : 'pointer',
            opacity: isConfirmDisabled ? 0.2 : 1,
            fontSize: '16px',
            fontWeight: '600',
          }}
          disabled={isConfirmDisabled}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default App;
