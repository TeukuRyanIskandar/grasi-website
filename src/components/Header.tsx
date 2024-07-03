import './Header.scss';

interface HeaderProps {
  headerTitle: string;
  headerDesc?: string[];
}

const Header: React.FC<HeaderProps> = ({ headerTitle, headerDesc }) => {
  return (
    <>
      <div className='header-container'>
        <div className='header-title'>
          <h1>{headerTitle}</h1>
        </div>
        <div className='header-desc'>
          {headerDesc.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Header;
