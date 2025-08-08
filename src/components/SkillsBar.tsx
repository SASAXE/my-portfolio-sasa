'use client';

import { motion } from 'framer-motion';
import { Database, Code, BarChart3, Cpu, Server, Cloud } from 'lucide-react';

const skills = [
  { name: 'SQL', icon: Database },
  { name: 'Python', icon: Code },
  { name: 'Data Analysis', icon: BarChart3 },
  { name: 'Machine Learning', icon: Cpu },
  { name: 'Database Management', icon: Server },
  { name: 'Cloud Computing', icon: Cloud },
];

export default function SkillsBar() {
  return (
    <div className="hidden lg:block bg-gradient-to-r from-purple-900/80 to-blue-900/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-10 overflow-hidden">
          <div className="flex items-center space-x-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex items-center space-x-2 text-xs font-medium text-white/80 hover:text-white transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <skill.icon className="w-3 h-3 text-purple-300" />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-xs text-white/60">
            <span>🚀 Data & AI Enthusiast</span>
          </div>
        </div>
      </div>
    </div>
  );
}
