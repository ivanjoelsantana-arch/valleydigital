/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Img, Preview, Text, Hr, Section,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Valley Digital Consulting"
const LOGO_URL = "https://valleydigital.lovable.app/lovable-uploads/69076401-3545-4dde-8aab-0f87ab8a498a.png"

interface ProjectAckProps {
  name?: string
}

const ProjectAcknowledgmentEmail = ({ name }: ProjectAckProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Your Project Discovery at Valley Digital Consulting</Preview>
    <Body style={main}>
      {/* Header with dark background */}
      <Container style={header}>
        <Img
          src={LOGO_URL}
          alt="Valley Digital Consulting Logo"
          width="200"
          height="auto"
          style={logo}
        />
      </Container>

      {/* Body content */}
      <Container style={container}>
        <Heading style={h1}>
          {name ? `Thank you, ${name}.` : 'Thank you.'}
        </Heading>

        <Hr style={divider} />

        <Text style={text}>
          Thank you for providing the context for your project. I am personally
          reviewing your inquiry to ensure our architectural approach is the
          right strategic fit for your growth goals.
        </Text>

        <Text style={text}>
          I'll be in touch within 24 hours to discuss the next steps and, if
          aligned, schedule our initial strategy session.
        </Text>

        <Section style={signoff}>
          <Text style={regards}>Best regards,</Text>
          <Text style={signatureName}>Ivan</Text>
          <Text style={signatureTitle}>{SITE_NAME}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ProjectAcknowledgmentEmail,
  subject: 'Your Project Discovery at Valley Digital Consulting',
  displayName: 'Project acknowledgment',
  previewData: { name: 'Jane' },
} satisfies TemplateEntry

/* ── Styles ─────────────────────────────────────────── */

const main = {
  backgroundColor: '#ffffff',
  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
}

const header = {
  backgroundColor: '#15191E',
  padding: '32px 28px',
  textAlign: 'center' as const,
  borderRadius: '0',
}

const logo = {
  margin: '0 auto',
  display: 'block' as const,
}

const container = {
  padding: '36px 28px 32px',
  maxWidth: '560px',
}

const h1 = {
  fontSize: '22px',
  fontWeight: '800' as const,
  color: '#15191E',
  margin: '0 0 16px',
  letterSpacing: '-0.01em',
}

const divider = {
  borderColor: 'hsl(210, 80%, 42%)',
  borderWidth: '2px',
  margin: '0 0 28px',
  width: '48px',
}

const text = {
  fontSize: '15px',
  color: '#374151',
  lineHeight: '1.7',
  margin: '0 0 20px',
}

const signoff = {
  marginTop: '12px',
}

const regards = {
  fontSize: '15px',
  color: '#374151',
  margin: '0 0 4px',
  lineHeight: '1.5',
}

const signatureName = {
  fontSize: '16px',
  fontWeight: '700' as const,
  color: '#15191E',
  margin: '0 0 2px',
}

const signatureTitle = {
  fontSize: '13px',
  color: '#6b7280',
  margin: '0',
}
