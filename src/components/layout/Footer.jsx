import { Send, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { personalInfo, socialLinks } from '../../data/resume'

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  send: Send,
  mail: Mail,
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-text-muted/10 bg-surface/50 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <div className="flex gap-4">
          {socialLinks.map((social) => {
            const Icon = iconMap[social.icon]
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="rounded-badge border border-text-muted/20 p-3 text-text-muted transition-colors duration-300 hover:border-primary hover:text-secondary hover:shadow-glow"
              >
                <Icon size={18} />
              </a>
            )
          })}
        </div>
        <p className="text-sm text-text-muted">
          © {year} {personalInfo.name}. تمام حقوق محفوظ است.
        </p>
      </div>
    </footer>
  )
}
