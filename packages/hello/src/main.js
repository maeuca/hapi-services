import start from '.'

export default (async function () {
  start(3001)
  process.on('unhandledRejection', (err) => {
    console.log(err)
    process.exit(1)
  })
})()
