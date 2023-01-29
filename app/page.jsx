import Image from 'next/image'
import styles from './styles/page.module.css'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import { Inter } from '@next/font/google'
import rehypeKatex from 'rehype-katex'
import ReactMarkdown from 'react-markdown';
import RemarkMathPlugin from 'remark-math';
import home from './components/Markdown/intro'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='page-content'>
      <ReactMarkdown
        children={home}
        remarkPlugins={[RemarkMathPlugin]} 
        rehypePlugins={[rehypeKatex]}
        />,
    </div>
  )
}
