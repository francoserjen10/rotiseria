const userQueries = {
  insert: 'insert into usuarios (nombre, apellido, dni, contrasenia, email, rolId) values (?,?,?,?,?,?);',
  selectAll: 'select * from usuarios',
  // selectById: 'select usuarioId, nombre, apellido, dni, contrasenia, email, rolId from usuarios where usuarioId = ?;',
  selectByName: 'select usuarioId, nombre, apellido, dni, contrasenia, email, rolId from usuarios where nombre = ?;',
  update: 'update usuarios set nombre = ?, apellido = ?, dni = ?, contrasenia = ?, email = ? where usuarioId = ?;',
  deleteById: 'delete from usuarios where usuarioId = ?;',
}

export default userQueries;