import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Siswa extends BaseModel {
  @column({ isPrimary: true })
  declare id: number | undefined

  @column()
  declare nama: string | undefined

  @column()
  declare kelas: string | undefined

  @column()
  declare jurusan: string | undefined

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
