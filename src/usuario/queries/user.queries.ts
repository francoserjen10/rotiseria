const userQueries = {
  insert: 'insert into usuarios (nombre, apellido, dni, contrasenia, email, rolId) values (?,?,?,?,?,?);',
  selectAll: 'select * from usuarios',
  // selectById: 'select usuarioId, nombre, apellido, dni, contrasenia, email, rolId from usuarios where usuarioId = ?;',
  selectByEmail: 'select * from usuarios where email = ?;',
  updateUser: 'UPDATE usuarios SET nombre = ?, apellido = ?, dni = ?, contrasenia = ?, email = ? WHERE usuario_id = ?;',
  updateImageUrl: 'UPDATE usuarios SET url_image = ?, url_image_delete = ?, display_url_image = ? WHERE usuario_id = ?;',
  deleteById: 'delete from usuarios where usuarioId = ?;',
}

export default userQueries;