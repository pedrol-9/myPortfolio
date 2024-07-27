import React from 'react'
import { motion } from 'framer-motion'

function ProjectCard({ project }) {
  return (
    <motion.div
      className="bg-white p-4 rounded-lg shadow-md"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className="text-lg font-bold">{project.name}</h3>
      <p>{project.description}</p>
    </motion.div>
  )
}

export default ProjectCard
