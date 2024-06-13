const userQueries = {
  insert: 'INSERT INTO usuarios (nombre, apellido, dni, contrasenia, email, rol_id) values (?,?,?,?,?,?);',
  selectAll: 'SELECT * from usuarios',
  // selectById: 'select usuarioId, nombre, apellido, dni, contrasenia, email, rolId from usuarios where usuarioId = ?;',
  selectByEmail: 'SELECT * from usuarios WHERE email = ?;',
  updateUser: 'UPDATE usuarios SET nombre = ?, apellido = ?, dni = ?, contrasenia = ?, email = ? WHERE usuario_id = ?;',
  updateImageUrl: 'UPDATE usuarios SET url_image = ?, url_image_delete = ?, display_url_image = ? WHERE usuario_id = ?;',
  deleteById: 'DELETE from usuarios WHERE usuario_id = ?;',
}

export default userQueries;