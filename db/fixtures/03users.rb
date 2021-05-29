User.seed(
  :id,
  { id: 1, name: 'izumi', email: 'izumi@example.com', role: 'admin', crypted_password: User.encrypt('123456') }
)
