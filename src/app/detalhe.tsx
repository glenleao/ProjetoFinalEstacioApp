import { View, Text, Alert } from "react-native"

import { api } from "@/services/api"
import { useEffect, useState } from "react"
import { Categories, CategoriesProps } from "@/components/categories"

import { Button } from "@/components/button"
import {router } from "expo-router"