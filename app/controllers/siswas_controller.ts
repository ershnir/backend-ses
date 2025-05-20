import type { HttpContext } from '@adonisjs/core/http'
import Siswa from '#models/siswa'

export default class SiswasController {
  public async index({ response }: HttpContext) {
    const siswas = await Siswa.all()
    return response.json(siswas)
  }

  public async store({ request, response }: HttpContext) {
    const data = request.only(['nama', 'kelas', 'jurusan'])
    if (!data.nama || data.nama.length < 5) {
      return response.badRequest({
        message: 'Untuk nama minimal 5 huruf',
      })
    }

    if (!data.kelas || data.kelas.length < 1) {
      return response.badRequest({
        message: 'Untuk kelas minimal 1 huruf',
      })
    }

    if (!data.jurusan || data.jurusan.length < 2) {
      return response.badRequest({
        message: 'Untuk jurusan minimal 2 huruf',
      })
    }

    const siswa = await Siswa.create(data)
    return response.created({ message: 'Siswa berhasil ditambahkan', data: siswa })
  }

  public async show({ params, response }: HttpContext) {
    const siswa = await Siswa.find(params.id)
    if (!siswa) {
      return response.notFound({ message: 'Siswa tidak ditemukan' })
    }
    return response.ok(siswa)
  }

  public async update({ params, request, response }: HttpContext) {
    const siswa = await Siswa.find(params.id)
    if (!siswa) {
      return response.notFound({ message: 'Siswa tidak ditemukan' })
    }
    const data = request.only(['nama', 'kelas', 'jurusan'])
    if (!data.nama || data.nama.length < 5) {
      return response.badRequest({
        message: 'Untuk nama minimal 5 huruf',
      })
    }

    if (!data.kelas || data.kelas.length < 1) {
      return response.badRequest({
        message: 'Untuk kelas minimal 1 huruf',
      })
    }

    if (!data.jurusan || data.jurusan.length < 2) {
      return response.badRequest({
        message: 'Untuk jurusan minimal 2 huruf',
      })
    }

    await siswa.merge(data)
    await siswa.save()
    return response.ok({ message: 'Siswa berhasil diupdate', data: siswa })
  }

  public async destroy({ params, response }: HttpContext) {
    const siswa = await Siswa.find(params.id)
    if (!siswa) {
      return response.notFound({ message: 'Siswa tidak ditemukan' })
    }
    await siswa.delete()
    return response.ok({ message: 'Siswa berhasil dihapus' })
  }
}
