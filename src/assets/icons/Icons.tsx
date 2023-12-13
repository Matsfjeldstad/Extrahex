import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  className?: string;
};

export function Arrow({ className }: Props) {
  return (
    <svg
      width='35'
      height='46'
      viewBox='0 0 35 46'
      className={cn('w-10 fill-white', className)}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M6.52417 37.6548L7.21467 38.9864L7.21467 38.9864L6.52417 37.6548ZM0.571597 39.5467C0.321226 40.3364 0.758428 41.1795 1.54812 41.4299L14.4168 45.5099C15.2065 45.7603 16.0496 45.3231 16.3 44.5334C16.5504 43.7437 16.1132 42.9005 15.3235 42.6502L3.88464 39.0235L7.51134 27.5846C7.76171 26.795 7.32451 25.9518 6.53482 25.7014C5.74513 25.4511 4.902 25.8883 4.65163 26.678L0.571597 39.5467ZM5.83367 36.3232L1.31095 38.6684L2.69195 41.3316L7.21467 38.9864L5.83367 36.3232ZM31.519 0.763009C29.0782 16.0178 19.5483 29.2115 5.83367 36.3232L7.21467 38.9864C21.7736 31.4369 31.8903 17.4309 34.4814 1.23699L31.519 0.763009Z' />
    </svg>
  );
}
export function PlsLogo({ className }: Props) {
  return (
    <svg
      width='72'
      height='66'
      className={cn('h-10 fill-white', className)}
      viewBox='0 0 72 66'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M71.9244 36.7977C71.9244 37.1345 71.8454 37.4547 71.6956 37.7326L56.2872 64.0833C55.6337 65.2009 54.426 65.8893 53.1191 65.8893H18.8795C17.5726 65.8893 16.3649 65.2009 15.7114 64.0833L0.301491 37.73C0.152179 37.4527 0.0742188 37.134 0.0742188 36.7977C0.0742188 35.7071 0.969698 34.8229 2.07433 34.8229H18.9803L23.2648 42.0083L23.2911 42.0512C23.8628 42.9576 25.0658 43.253 26.0031 42.7082L26.0516 42.6791C26.4837 42.4113 26.7966 41.99 26.9247 41.501L32.384 20.6633L37.0716 54.2107L37.0787 54.2575C37.2519 55.3128 38.2479 56.044 39.3263 55.8971L39.3753 55.8898C40.1561 55.7641 40.7904 55.1946 40.9893 54.4354L47.5698 29.3186L50.2716 33.85L50.2985 33.8937C50.6631 34.4707 51.304 34.8229 51.9952 34.8229H69.9242C71.0289 34.8229 71.9244 35.7071 71.9244 36.7977ZM53.1191 0.110718C54.426 0.110718 55.6337 0.79915 56.2872 1.91669L71.6966 28.2687C71.8456 28.5462 71.9244 28.8662 71.9244 29.2023C71.9244 30.293 71.0289 31.1771 69.9242 31.1771H52.9628L48.6784 23.9918L48.6489 23.9439C48.3777 23.5172 47.9511 23.2083 47.4557 23.0818L47.4092 23.0704C46.3548 22.8271 45.2911 23.4585 45.0185 24.4991L39.559 45.3366L34.8716 11.7893L34.8642 11.7409C34.7368 10.97 34.16 10.3437 33.3911 10.1473C32.3217 9.87418 31.2305 10.5087 30.9538 11.5646L24.3733 36.6812L21.6715 32.15L21.6447 32.1063C21.2801 31.5294 20.6392 31.1771 19.948 31.1771H2.07433C0.969698 31.1771 0.0742188 30.293 0.0742188 29.2023C0.0742188 28.8688 0.150086 28.5534 0.296647 28.2777L15.7114 1.91669C16.3649 0.79915 17.5726 0.110718 18.8795 0.110718H53.1191Z'
      />
    </svg>
  );
}
export function EthLogo({ className }: Props) {
  return (
    <svg
      width='60'
      height='96'
      viewBox='0 0 60 96'
      className={cn('h-10', className)}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M29.991 0.0107422L29.3469 2.19779V65.6609L29.991 66.3032L59.4823 48.8902L29.991 0.0107422Z'
        fill='#BFBFBF'
      />
      <path
        d='M29.991 0.0107422L0.5 48.8902L29.991 66.3032L29.9912 35.5004L29.991 0.0107422Z'
        fill='#E3E3E3'
      />
      <path
        d='M29.991 71.881L29.628 72.3231V94.93L29.991 95.9892L59.4998 54.4767L29.991 71.881Z'
        fill='#BFBFBF'
      />
      <path d='M29.991 95.9892V71.881L0.5 54.4764L29.991 95.9892Z' fill='#E3E3E3' />
      <path d='M29.991 66.3032L59.4823 48.8902L29.9912 35.5004L29.991 66.3032Z' fill='#A4A4A4' />
      <path d='M0.5 48.8902L29.991 66.3032L29.9912 35.5004L0.5 48.8902Z' fill='#BFBFBF' />
    </svg>
  );
}

export function HexLogo({ className }: { className?: string }) {
  return (
    <svg
      width='336'
      height='296'
      viewBox='0 0 336 296'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        opacity='0.5'
        d='M78.9948 289.193L56.2547 249.708C55.5485 248.245 55.5485 246.537 56.2547 245.074L81.5201 201.207C82.4179 199.829 83.9148 198.96 85.5535 198.866H136.06C137.702 198.962 139.202 199.83 140.106 201.207L165.359 245.074C166.09 246.549 166.09 248.281 165.359 249.756L140.034 293.599C139.129 294.939 137.668 295.795 136.06 295.928H90.688C85.9603 295.622 81.6412 293.135 78.9948 289.193ZM242.963 198.902L192.695 111.504C191.453 109.635 189.413 108.454 187.178 108.311H86.523C84.288 108.454 82.2476 109.635 81.0055 111.504L30.6781 198.95C29.6857 200.963 29.6857 203.324 30.6781 205.337L45.4831 230.98L71.2871 186.177C72.7006 184.014 75.0458 182.644 77.6184 182.479H143.924C146.515 182.624 148.884 183.997 150.303 186.177L183.468 243.801C184.641 246.126 184.641 248.872 183.468 251.197L157.664 296H187.142C189.383 295.867 191.429 294.678 192.659 292.795L242.963 205.361C243.979 203.329 243.979 200.934 242.963 198.902ZM334.282 141.073L257.146 6.90299C254.48 2.82126 250.035 0.257609 245.177 0H90.7837C85.9259 0.257609 81.481 2.82126 78.8153 6.90299L1.64253 141.073C-0.54751 145.404 -0.54751 150.524 1.64253 154.855L19.3439 185.6L70.6169 96.4377C72.3749 93.7474 75.3021 92.0544 78.5041 91.8757H195.089C198.288 92.0543 201.211 93.7478 202.964 96.4377L261.239 197.677C262.687 200.545 262.687 203.934 261.239 206.801L209.918 295.928H245.225C250.083 295.67 254.528 293.107 257.193 289.025L334.366 154.867C336.545 150.533 336.545 145.419 334.366 141.085L334.282 141.073Z'
        fill='url(#paint0_linear_1490_1496)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_1490_1496'
          x1='255.5'
          y1='-9.6818e-06'
          x2='106'
          y2='338.5'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#FF3C82' />
          <stop offset='1' stop-color='#340323' stop-opacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
}
