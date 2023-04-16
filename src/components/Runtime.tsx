import { Box, Card, Flex, Paragraph, Text, Button } from 'theme-ui'
interface Props {
  result: string
  warnings: string[]
  printResult: string[]
  error: string
  clearOutput: () => void
}

const Runtime = ({
  result,
  warnings,
  error,
  printResult,
  clearOutput,
}: Props) => {
  return (
    <Flex sx={{ flexDirection: 'column', gap: 3, minHeight: '100%' }}>
      <Card>
        <Paragraph> Welcome to CLang Playground!</Paragraph>
        <Paragraph>
          CLang is an adaptation of the language C using TypeScript interpreter.
        </Paragraph>
      </Card>
      <Flex sx={{ justifyContent: 'space-between' }}>
        <Paragraph>Output:</Paragraph>
        <Button onClick={() => clearOutput()}>Clear</Button>
      </Flex>
      <Box
        sx={{ border: '1px solid #fff', p: 2, borderRadius: 3 }}
        className='output'>
        {/* Print results */}
        {printResult.map((p, i) => {
          return (
            <span key={i} style={{ whiteSpace: 'pre-wrap' }}>{`${p}`}</span>
          )
        })}
        {/* Warnings */}
        {warnings.map((w, i) => (
          <Box key={i}>
            <Text color='#EEC643'>
              Warning: <br />
            </Text>
            <Text>{w}</Text>
            <br />
          </Box>
        ))}
        {/* Error */}
        {error && (
          <Box>
            <Text color='#ED4242'>{error}</Text>
          </Box>
        )}
        {/*  Result */}
        {result && (
          <Box>
            <Text sx={{ fontWeight: 'bold' }}>
              Result: <br />
            </Text>
            <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>
          </Box>
        )}
      </Box>
    </Flex>
  )
}

export default Runtime
