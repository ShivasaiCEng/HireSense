import Marquee from 'react-fast-marquee';

export default function LogoMarquee() {
  return (
    <Marquee gradient={true} speed={50}>
      <span style={{ marginRight: '3rem', fontSize:"30px" }}>RAMESH CSE 3rd YEAR</span>
      <span style={{ marginRight: '3rem',fontSize:"30px"  }}>LAMBA CSE 4th YEAR</span>
      <span style={{ marginRight: '3rem', fontSize:"30px" }}>LOHIT CSE 4th YEAR</span>
      <span style={{ marginRight: '3rem', fontSize:"30px" }}>ANITA CSE 2nd YEAR</span>
      <span style={{ marginRight: '3rem', fontSize:"30px"}}>GANGU CSE 1st YEAR</span>
      <span style={{ marginRight: '3rem', fontSize:"30px"}}>OM CSE 2nd YEAR</span>
      <span style={{ marginRight: '3rem', fontSize:"30px" }}>OLIVIA 4th YEAR</span>
    </Marquee>
  );
}
