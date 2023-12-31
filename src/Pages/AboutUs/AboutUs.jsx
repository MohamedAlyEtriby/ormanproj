import React from 'react'
import { Container, Row } from 'react-bootstrap'
import PersonCard from '../../Compnents/Personcard/PersonCard'
import Questions from '../../Compnents/Questions/Questions'
import SuccessPart from '../../Compnents/SuccessPart/SuccessPart'
import Elorman from '../../Compnents/Elorman/Elorman'
import ElormanDesc from '../../Compnents/ElormanDesc/ElormanDesc'

const AboutUs = () => {
  return (
    <div>
       <Elorman bool={true} />
        <ElormanDesc
          img1={"../../../assets/orman.png"}
          img2={"../../../assets/gmyaOrman.png"}
          desc={
            "منظمة مصرية أهلية، غير حكومية، لا تهدف إلى الربح ولا تخضع لضرائب على التبرعات، أنشئت عام 1993 مقيدة برقم 803 مركزية بوزارة التضامن الاجتماعي، تهدف إلى خدمة الفئات الأكثر احتياجًا، دون أي تمييز ديني أو سياسي، وذلك بشكل مؤسسي متطور ويؤكد دور العمل الأهلي فى تنمية المجتمعات اقتصاديًا واجتماعيًا. تعتمد الجمعية في تمويلها على التبرعات العينية والنقدية من المصريين داخل مصر وخارجها."
          }
        />
        <Elorman />
        <ElormanDesc
          img1={"../../../assets/RoayaImg.png"}
          img2={"../../../assets/RoayaImgCollection.png"}
          desc={
            "الانتقال بمفهوم العمل الخيري التطوعي من مجرد الدور الكمالى والمشبع لغريزة العطاء عند بعض الشرائح إلى أن يصبح عمل مؤسسى تنموى منظم يتم بشكل احترافى وينطلق من تحقيق أهدافه من ثقة المتبرعين وجدية المستفيدين وخبرة وكفاءة القائمين عليه."
          }
        />
        <Container fluid="lg">
          <Row>
            <PersonCard />
            <PersonCard />
            <PersonCard />
            <PersonCard />
            <PersonCard />
            <PersonCard />
          </Row>
        </Container>
        <div style={{ padding: "0 2rem" }}>
          <Questions title="ما هي الخدمات التي تقدمها الأرمان ؟" />
          <Questions
            title="
ما هي الأوراق المطلوبة من الجمعيات التي ترغب في التعاون مع الأورمان للاستفادة من خدماتها الخيرية؟"
          />
          <Questions title="ما هي شروط كفالة الاطفال ؟" />
          <Questions title="ما هي شروط كفالة الاطفال ؟ما هي الاوراق المطلوبة لكفالة طفل يتيم ؟" />
        </div>
        <SuccessPart />
    </div>
  )
}

export default AboutUs
