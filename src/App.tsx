import { Flex, ThemeProvider, Grid, Box, Heading, Button } from 'theme-ui'
import theme from './theme'
import Runtime from './components/Runtime'
import Code from './components/Code'
import { run } from 'c-lang/dist'
import { useEffect, useState } from 'react'

function App() {
  useEffect(() => {
    window.addEventListener('warning', (e: any) => {
      setWarnings((prev) => [...prev, e.detail.message])
    })
  }, [])
  const [code, setCode] = useState(`int main() {

  }`)
  const [warnings, setWarnings] = useState<string[]>([])
  const [error, setError] = useState('')
  const [result, setResult] = useState('')
  const clearOutput = () => {
    setWarnings([])
    setError('')
    setResult('')
  }
  const runCode = () => {
    clearOutput()
    try {
      const result = run(code)
      setResult((prev) => prev.concat('\n' + result))
    } catch (e: any) {
      console.log(e.message)
      setError('Compile Error')
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box bg='muted'>
          <Heading as='h3' sx={{ padding: '10px' }}>
            CLang Playground
          </Heading>
        </Box>

        <Flex bg='background' p={2}>
          <Button onClick={runCode}>Run</Button>
        </Flex>

        <Grid columns={[2, '1fr 1fr']} px={3} gap={4}>
          <Code code={code} onChange={(code) => setCode(code)} />
          <Runtime warnings={warnings} error={error} result={result} />
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default App
