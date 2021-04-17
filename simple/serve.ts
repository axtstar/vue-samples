
import { Application, Router, Status } from 'https://deno.land/x/oak/mod.ts'

const port = 8000

const app = new Application()
const router = new Router()

// error handler
app.use(async (context, next) => {
  try {
    await next()
  } catch (err) {
        console.log(err)
  }
})

// the routes defined here
router.get('/', context => {
    context.response.body = 'Hello world!'
})

router.get('/error', context => {
    throw new Error('an error has been thrown')
})

app.use(router.routes())
app.use(router.allowedMethods())

// static content
app.use(async (context, next) => {
    const root = `${Deno.cwd()}/dist`
    try {
        await context.send({ root })
    } catch {
        next()
    }
})

// page not found
app.use( async context => {
    context.response.status = Status.NotFound
  context.response.body = `"${context.request.url}" not found`
})

app.addEventListener("listen", ({ port }) => console.log(`listening on port: ${port}`) )

await app.listen({ port })
