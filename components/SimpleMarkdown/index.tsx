import React from 'react';

type Props = {
  className?: string;
  text: string;
};

const SimpleMarkdown: React.FC<Props> = ({ className, text }) => {
  const markdownRegex = /\*\*\*(.*?)\*\*\*|\*\*(.*?)\*\*|\*(.*?)\*|_(.*?)_/g;

  const formattedText = text.replace(
    markdownRegex,
    (match, italicBold, bold, italic, underlined) =>
      (italicBold && `<strong><em>${italicBold}</em></strong>`) ||
      (bold && `<strong>${bold}</strong>`) ||
      (italic && `<em>${italic}</em>`) ||
      (underlined && `<ins>${underlined}</ins>`) ||
      match,
  );

  return (
    <p
      className={className}
      dangerouslySetInnerHTML={{ __html: formattedText }}
    />
  );
};

export default SimpleMarkdown;
