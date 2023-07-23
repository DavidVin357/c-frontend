import Editor from 'react-simple-code-editor'
import Highlight, { defaultProps } from 'prism-react-renderer'
import darkTheme from 'prism-react-renderer/themes/nightOwl'
import { LuCopy } from 'react-icons/lu'

interface PropsTypes {
  code: string

  onChange: (code: string) => void
  style?: object
}
const Code = ({ code, onChange, style }: PropsTypes) => {
  const highlight = (code: string) => (
    <Highlight {...defaultProps} theme={darkTheme} code={code} language='c'>
      {({ tokens, getLineProps, getTokenProps }) => (
        <>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </>
      )}
    </Highlight>
  )

  return (
    <Editor
      value={code}
      onValueChange={(code) => onChange(code)}
      highlight={(code) => highlight(code)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
        border: '1px solid #ffffff',
        borderRadius: '2px',
        height: '100%',
        ...style,
      }}
      insertSpaces={true}
    />
  )
}
export default Code
