import { IconArrowRight } from '@supabase/ui'
import Link from 'next/link'

function TextLink({ url, label }: any) {
  return (
    <Link href={url} as={url}>
      <a className="block text-sm text-gray-400 dark:text-gray-400 mt-3">
        <div className="flex items-center">
          <span>{label}</span>
          <span className="ml-2">
            <IconArrowRight size="tiny" />
          </span>
        </div>
      </a>
    </Link>
  )
}

export default TextLink
