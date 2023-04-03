import { Box, Card, Flex, Paragraph, Text, Textarea } from 'theme-ui'
interface Props {
  result: string
  warnings: string[]
}
const Runtime = ({ result, warnings }: Props) => {
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
        {warnings.map((w, i) => (
          <Box key={i}>
            <Text sx={{ color: 'red' }}>
              Warning: <br />
            </Text>
            <Text>{w}</Text>
            <br />
          </Box>
        ))}
        {/* <Text sx={{ fontWeight: 'bold' }}>
          Result: <br />
        </Text> */}
        <Text>{result}</Text>
      </Box>
    </Flex>
  )
}

export default Runtime
