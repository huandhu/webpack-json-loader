import compiler from './compiler.js'

test('module exports a json file', async () => {
    const stats = await compiler('obj.json');
    const output = stats.toJson().modules[0].source;

    console.log(output)
    expect(output).toBe(`module.exports = {"name":"Jack","age":20,"message":"Hello Jack!"}`)
})