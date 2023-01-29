import Link from 'next/link';
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import { Inter } from '@next/font/google'
import rehypeKatex from 'rehype-katex'
import ReactMarkdown from 'react-markdown';
import RemarkMathPlugin from 'remark-math';
import algebra1 from '@/app/components/Markdown/algebrat';

const Algebra = () => (
    <div className="">
        <ReactMarkdown
            children={algebra1}
            remarkPlugins={[RemarkMathPlugin]} 
            rehypePlugins={[rehypeKatex]}
        />
    </div>

);

export default Algebra;
