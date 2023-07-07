import React from 'react'
import { SocialIcons } from '../components/Header/HeaderStyles'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaResearchgate } from 'react-icons/fa'

const SocialIconsList = () => {
  return (
    <>
      <SocialIcons href='https://github.com/aminase'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/amina-selimovic-50990918a/'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.researchgate.net/publication/364210718_Magnetic_gelatin_nanoparticles_as_a_biocompatible_carrier_system_for_small_interfering_RNA_in_human_colorectal_cancer_synthesis_optimization_characterization_and_cell_viability_studies'>
        <FaResearchgate size='3rem' />
      </SocialIcons>
    </>
  )
}

export default SocialIconsList
