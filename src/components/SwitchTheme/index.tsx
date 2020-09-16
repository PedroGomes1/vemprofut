import React, { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import Switch from 'react-switch';
import useTheme from '../../contexts/theme';
import { Container } from './styles';

const SwitchTheme: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const { toggleTheme } = useTheme();

  return (
    <Container>
      <Switch
        onChange={() => {
          setChecked(!checked);
          toggleTheme();
        }}
        checkedIcon={(
          <div className="icon-switch">
            <FiSun color="#fff" />
          </div>
        )}
        uncheckedIcon={(
          <div className="icon-switch">
            <FiMoon color="#000" />
          </div>
        )}
        handleDiameter={30}
        height={30}
        width={65}
        onHandleColor="#2693e6"
        onColor="#86d3ff"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        checked={checked}
      />
    </Container>
  );
};

export default SwitchTheme;
