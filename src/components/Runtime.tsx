import { Box, Card, Flex, Paragraph, Text, Textarea } from 'theme-ui'
interface Props {
  result: string
  warnings: string[]
  error: string
}
const Runtime = ({ result, warnings, error }: Props) => {
  return (
    <Flex sx={{ flexDirection: 'column', gap: 3, minHeight: '100%' }}>
      <Card>
        <Paragraph> Welcome to CLang Playground!</Paragraph>
        <Paragraph>
          CLang is an adaptation of the language C using TypeScript interpreter.
        </Paragraph>
      </Card>
      <Paragraph>Output:</Paragraph>

      <Box
        sx={{ border: '1px solid #fff', p: 2, borderRadius: 3 }}
        className='output'>
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
            <Text>{result}</Text>
          </Box>
        )}
      </Box>
    </Flex>
  )
}

export default Runtime
