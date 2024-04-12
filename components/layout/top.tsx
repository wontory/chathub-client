import { cn } from '@/lib/utils'

const Top = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div className={cn('sticky top-0 bg-background', className)}>
      {children}
    </div>
  )
}

export { Top }