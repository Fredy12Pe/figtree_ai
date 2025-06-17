import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface GoLiveProps {
  className?: string;
  imageAnimationProgress: MotionValue<number>;
}

export default function GoLive({ className = '', imageAnimationProgress }: GoLiveProps) {
  const imageX = useTransform(imageAnimationProgress, [0, 0.5], [100, 0]);
  const imageOpacity = useTransform(imageAnimationProgress, [0, 0.3], [0, 1]);

  return (
    <div 
      className={`