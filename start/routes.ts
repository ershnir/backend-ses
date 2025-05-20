/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'
const SiswasController = () => import('#controllers/siswas_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
  .group(() => {
    router.get('/', [SiswasController, 'index'])
    router.post('/', [SiswasController, 'store'])
    router.get('/:id', [SiswasController, 'show'])
    router.put('/:id', [SiswasController, 'update'])
    router.delete('/:id', [SiswasController, 'destroy'])
  })
  .prefix('/siswas')
