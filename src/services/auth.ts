type Credentials = {
  email: string;
  password: string;
};

export type AuthSession = {
  user: {
    id: string;
    email: string;
    name: string;
  };
  token: string;
};

const users = [
  {
    id: '1',
    email: 'alex@relay.test',
    password: 'Alex12345',
    name: 'Alex',
  },
  {
    id: '2',
    email: 'anna@relay.test',
    password: 'Anna12345',
    name: 'Anna',
  },
];

export async function login({
  email,
  password,
}: Credentials): Promise<AuthSession> {
  
  await new Promise(resolve => setTimeout(resolve, 500));

  const user = users.find(
    user =>
      user.email === email.trim().toLowerCase() &&
      user.password === password
  );

  if (!user) {
    throw new Error('Email or password is invalid.');
  }

  return {
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
    },
    token: user.id,
  };
}
