import Fastify from 'fastify'

export default () => {
  const fastify = Fastify({
    logger: true
  })
  
  fastify.get('/', (request, reply) => {
    reply.send({ hello: 'world!' })
  })
  
  fastify.listen({ port: 3000 }, (err, address) => {
    if (err) throw err
    // Server is now listening on ${address}
  })
}
