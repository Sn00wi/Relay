type Credentials = {
  loginInput: string;
  password: string;
};

export type AuthSession = {
  user: {
    id: string;
    loginInput: string;
    name: string;
  };
  token: string;
};

const users = [
  {
    id: '1',
    loginInput: 'alex@relay.test',
    password: 'Alex12345',
    name: 'Alex',
  },
  {
    id: '2',
    loginInput: 'anna@relay.test',
    password: 'Anna12345',
    name: 'Anna',
  },
];

export async function login({
  loginInput,
  password,
}: Credentials): Promise<AuthSession> {
  
  await new Promise(resolve => setTimeout(resolve, 500));

  const user = users.find(
    user =>
      user.loginInput === loginInput.trim().toLowerCase() &&
      user.password === password
  );

  if (!user) {
    throw new Error('Email or password is invalid.');
  }

  return {
    user: {
      id: user.id,
      loginInput: user.loginInput,
      name: user.name,
    },
    token: user.id,
  };
}
