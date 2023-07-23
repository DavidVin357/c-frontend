/** @jsxImportSource theme-ui */

import { Flex, ThemeProvider, Grid, Box, Heading, Button, Text } from 'theme-ui'
import theme from './theme'
import Runtime from './components/Runtime'
import Code from './components/Code'
import { run } from 'c-lang/dist'
import { useEffect, useState } from 'react'
import codeChunks from './code-chunks'
import CodeExample from './components/CodeExample'

function App() {
  useEffect(() => {
    window.addEventListener('warning', (e: any) => {
      setWarnings((prev) => [...prev, e.detail.message])
    })
  }, [])

  useEffect(() => {
    window.addEventListener('table', (e: any) => {
      setPrintResult((prev) => [...prev, e.detail.message])
    })
  }, [])

  useEffect(() => {
    window.addEventListener('printf', (e: any) => {
      setPrintResult((prev) => [...prev, e.detail.message])
    })
  }, [])

  const [code, setCode] = useState(codeChunks[0].code)
  const [warnings, setWarnings] = useState<string[]>([])
  const [error, setError] = useState('')
  const [result, setResult] = useState('')
  const [printResult, setPrintResult] = useState<string[]>([])
  const clearOutput = () => {
    setWarnings([])
    setPrintResult([])
    setError('')
    setResult('')
  }
  const runCode = () => {
    clearOutput()
    try {
      const result = run(code.replaceAll('\\n', '\n').replaceAll('\\0', '\0'))
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
          <Code code={code} onChange={(code: string) => setCode(code)} />
          <Runtime
            warnings={warnings}
            error={error}
            result={result}
            printResult={printResult}
            clearOutput={clearOutput}
          />
        </Grid>

        <Box py={5}>
          <Heading as='h2' p={4}>
            Other Code Examples
          </Heading>
          <Grid
            sx={{
              px: 4,
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 5,
            }}>
            {codeChunks.map((example) => (
              <CodeExample title={example.title} code={example.code} />
            ))}
          </Grid>
        </Box>
        <footer>
          Some examples are taken from
          <a
            sx={{
              textDecoration: 'none',
              color: '#64074D',
            }}
            target='_blank'
            href='https://www.geeksforgeeks.org/c-programming-examples/'>
            {' '}
            GeeksForGeeks
          </a>
        </footer>
      </Box>
    </ThemeProvider>
  )
}

export default App
