<template>
	<div class="isolate bg-dark-chocolate">
		<div class="px-6 pt-6 lg:px-8">
			<div>
				<nav class="flex h-9 items-center justify-between" aria-label="Global">
					<div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
						<a href="#" class="-m-1.5 p-1.5">
							<span class="sr-only">Your Company</span>
							<img
								class="h-8"
								src="https://tailwindui.com/img/logos/mark.svg?color=orange&shade=600"
								alt=""
							/>
						</a>
					</div>
					<div class="flex lg:hidden">
						<button
							type="button"
							class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							@click="mobileMenuOpen = true"
						>
							<span class="sr-only">Open main menu</span>
							<Bars3Icon class="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div
						class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12"
					>
						<a
							v-for="item in navigation"
							:key="item.name"
							:href="item.href"
							class="font-semibold text-white hover:text-white"
							>{{ item.name }}</a
						>
					</div>
					<div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
						<a
							href="#"
							class="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
							>Log in</a
						>
					</div>
				</nav>
				<Dialog as="div" :open="mobileMenuOpen" @close="mobileMenuOpen = false">
					<DialogPanel
						focus="true"
						class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
					>
						<div class="flex h-9 items-center justify-between">
							<div class="flex">
								<a href="#" class="-m-1.5 p-1.5">
									<span class="sr-only">Your Company</span>
									<img
										class="h-8"
										src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
										alt=""
									/>
								</a>
							</div>
							<div class="flex">
								<button
									type="button"
									class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
									@click="mobileMenuOpen = false"
								>
									<span class="sr-only">Close menu</span>
									<XMarkIcon class="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
						</div>
						<div class="mt-6 flow-root">
							<div class="-my-6 divide-y divide-gray-500/10">
								<div class="space-y-2 py-6">
									<a
										v-for="item in navigation"
										:key="item.name"
										:href="item.href"
										class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
										>{{ item.name }}</a
									>
								</div>
								<div class="py-6">
									<a
										href="#"
										class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-white hover:bg-gray-400/10"
										>Log in</a
									>
								</div>
							</div>
						</div>
					</DialogPanel>
				</Dialog>
			</div>
		</div>
		<div class="relative px-6 lg:px-8">
			<div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
				<div>
					<div class="hidden sm:mb-8 sm:flex sm:justify-center">
						<div
							class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
						>
							<span class="text-white">
								Announcing our next round of funding.
								<a href="#" class="font-semibold text-carrot-orange"
									><span class="absolute inset-0" aria-hidden="true" />Read more
									<span aria-hidden="true">&rarr;</span></a
								>
							</span>
						</div>
					</div>
					<div>
						<h1
							class="text-4xl font-bold tracking-tight sm:text-center text-white sm:text-6xl"
						>
							Data to enrich your online business
						</h1>
						<p class="mt-6 text-lg leading-8 text-white sm:text-center">
							Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
							lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
							fugiat aliqua.
						</p>
						<div class="mt-8 flex gap-x-4 sm:justify-center">
							<a
								href="#"
								class="inline-block rounded-lg bg-carrot-orange px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-carrot-orange hover:bg-spanish-orange hover:ring-spanish-orange"
							>
								Get started
								<span class="text-indigo-200" aria-hidden="true">&rarr;</span>
							</a>
							<a
								href="#"
								class="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20"
							>
								Live demo
								<span class="text-gray-400" aria-hidden="true">&rarr;</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Dialog, DialogPanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const navigation = [
	{ name: 'Product', href: '#' },
	{ name: 'Features', href: '#' },
	{ name: 'Marketplace', href: '#' },
	{ name: 'Company', href: '#' },
];

const mobileMenuOpen = ref(false);
</script>
