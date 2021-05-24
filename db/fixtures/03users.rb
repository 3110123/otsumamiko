User.seed(
  :id,
  { id: 1, name: 'izumi', email: 'izumi@test.com', crypted_password: User.encrypt('123456') }
)
