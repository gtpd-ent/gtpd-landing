import React from 'react';

type SimpleMarkdownProps = {
  children: string;
  className?: string;
  Tag?: Extract<
    keyof JSX.IntrinsicElements,
    'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  >;
};

const SimpleMarkdown = ({
  children,
  className,
  Tag = 'p',
}: SimpleMarkdownProps) => {
  const markdownRegex = /\*\*\*(.*?)\*\*\*|\*\*(.*?)\*\*|\*(.*?)\*|_(.*?)_/g;

  const formattedText = children.replace(
    markdownRegex,
    (match, italicBold, bold, italic, underlined) =>
      (italicBold && `<strong><em>${italicBold}</em></strong>`) ||
      (bold && `<strong>${bold}</strong>`) ||
      (italic && `<em>${italic}</em>`) ||
      (underlined && `<ins>${underlined}</ins>`) ||
      match,
  );

  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: formattedText }}
    />
  );
};

export default SimpleMarkdown;
