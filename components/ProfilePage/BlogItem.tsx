import Image from 'next/image';

import { formatName } from '@utils';

const BlogItem: React.FC = ({ postPreview: PostPreview }) => {
  return (
    <article>
      <div>
        <div>
          <Image src={postPreview.owner.picture} layout="fill" />
        </div>
        <div>
          <p>
            {formatName(
              postPreview.owner.title,
              postPreview.owner.firstName,
              postPreview.owner.lastName
            )}
          </p>
          <p>{postPreview.publishDate}</p>
        </div>
      </div>
      <h3>{postPreview.text}</h3>
      <div></div>
    </article>
  );
};

export default BlogItem;
